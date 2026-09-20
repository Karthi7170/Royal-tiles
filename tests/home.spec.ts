import { expect, test } from "@playwright/test";

async function openHome(page: import("@playwright/test").Page) {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(
    page.getByRole("heading", { name: /Surfaces that define remarkable spaces/i })
  ).toBeVisible();
}

test("homepage modules and internal navigation are present", async ({ page }) => {
  await openHome(page);

  for (const id of [
    "top",
    "collections",
    "visualizer",
    "inspiration",
    "calculator",
    "branches",
    "showroom",
    "enquiry"
  ]) {
    await expect(page.locator("#" + id)).toHaveCount(1);
  }

  const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll((links) =>
    links
      .map((link) => link.getAttribute("href"))
      .filter((href): href is string => Boolean(href && href.length > 1))
      .filter((href) => !document.querySelector(href))
  );

  expect(brokenAnchors).toEqual([]);
});

test("collections filter exposes correct cards and tab semantics", async ({ page }) => {
  await openHome(page);

  const allTab = page.getByRole("tab", { name: "All" });
  const wallTab = page.getByRole("tab", { name: "Wall" });

  await expect(allTab).toHaveAttribute("aria-selected", "true");
  await expect(page.locator(".collectionCard")).toHaveCount(6);

  await wallTab.click();
  await expect(wallTab).toHaveAttribute("aria-selected", "true");
  await expect(page.locator(".collectionCard")).toHaveCount(2);
  await expect(page.getByText("Designer Walls")).toBeVisible();
  await expect(page.getByText("Statement Surfaces")).toBeVisible();
});

test("room visualizer supports upload full floor wall reset and ranges", async ({ page }) => {
  await openHome(page);

  const input = page.locator("#room-photo-input");
  const png = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZQMcAAAAASUVORK5CYII=",
    "base64"
  );

  await input.setInputFiles({
    name: "room.png",
    mimeType: "image/png",
    buffer: png
  });

  await expect(page.locator(".visualizerBadge")).toContainText("Your room");
  await expect(page.locator(".visualizerSurface")).toHaveClass(/full/);
  await expect(page.getByRole("button", { name: "Full" })).toHaveAttribute("aria-pressed", "true");

  await page.getByRole("button", { name: "Floor" }).click();
  await expect(page.locator(".visualizerSurface")).toHaveClass(/floor/);
  await expect(page.getByRole("button", { name: "Floor" })).toHaveAttribute("aria-pressed", "true");

  await page.getByRole("button", { name: "Wall" }).click();
  await expect(page.locator(".visualizerSurface")).toHaveClass(/wall/);

  await page.getByLabel("Preview strength").fill("70");
  await expect(page.getByText("70%")).toBeVisible();

  await page.getByRole("button", { name: "Reset" }).click();
  await expect(page.locator(".visualizerBadge")).toContainText("Sample room");
  await expect(page.locator(".visualizerSurface")).toHaveClass(/full/);
});

test("visualizer rejects oversized uploads before reading them", async ({ page }) => {
  await openHome(page);

  const oversized = Buffer.alloc(12 * 1024 * 1024 + 1, 0);
  await page.locator("#room-photo-input").setInputFiles({
    name: "huge.jpg",
    mimeType: "image/jpeg",
    buffer: oversized
  });

  await expect(page.getByRole("alert")).toContainText("smaller than 12 MB");
});

test("tile calculator calculates area with wastage and validates numeric bounds", async ({ page }) => {
  await openHome(page);

  const length = page.getByLabel("Length (ft)");
  const width = page.getByLabel("Width (ft)");

  await length.fill("15");
  await width.fill("12");

  await expect(page.locator(".areaResult")).toContainText("198.0");

  expect(await length.evaluate((el) => (el as HTMLInputElement).checkValidity())).toBe(true);
  await length.fill("-2");
  expect(await length.evaluate((el) => (el as HTMLInputElement).checkValidity())).toBe(false);
});

test("four branch cards expose directions and contact actions", async ({ page }) => {
  await openHome(page);

  await expect(page.locator(".branchCard")).toHaveCount(4);
  await expect(page.locator('.branchCard a[href*="google.com/maps/search"]')).toHaveCount(4);
  await expect(page.getByRole("heading", { name: "Valayambattu" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Vellore" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Gudiyatham" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Pernambut" })).toBeVisible();
});

test("enquiry form rejects invalid phone and accepts a valid Indian number", async ({ page }) => {
  await openHome(page);

  await page.getByLabel("Your name").fill("Test Customer");
  const phone = page.getByLabel("Phone number");

  await phone.fill("abc");
  expect(await phone.evaluate((el) => (el as HTMLInputElement).checkValidity())).toBe(false);

  await phone.fill("+91 81238 68746");
  expect(await phone.evaluate((el) => (el as HTMLInputElement).checkValidity())).toBe(true);

  await expect(page.getByLabel("Preferred branch").locator("option")).toHaveCount(4);
});

test("rating presentation does not show five fully filled stars for 4.3", async ({ page }) => {
  await openHome(page);

  await expect(page.locator(".ratingNumber")).toHaveText("4.3");
  await expect(page.locator('.stars svg[fill="currentColor"]')).toHaveCount(4);
  await expect(page.locator(".stars svg")).toHaveCount(5);
});

test("SEO canonical robots sitemap and structured data are available", async ({ page, request }) => {
  await openHome(page);

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://royaltiles.vercel.app/"
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /premium tiles/i);

  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  expect(jsonLd).toContain("New Royal Tiles");
  expect(jsonLd).toContain("showroom-valayambattu");
  expect(jsonLd).toContain("showroom-vellore");
  expect(jsonLd).toContain("showroom-gudiyatham");
  expect(jsonLd).toContain("showroom-pernambut");

  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain("sitemap.xml");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain("https://royaltiles.vercel.app");
});

test("basic accessibility and responsive layout checks pass", async ({ page }) => {
  await openHome(page);

  expect(await page.locator("img:not([alt])").count()).toBe(0);

  const menuButton = page.getByRole("button", { name: /menu/i });
  if (await menuButton.isVisible()) {
    await menuButton.click();
    await expect(page.locator(".mobileMenu")).toBeVisible();
    await expect(page.locator(".mobileMenu").getByText("Room visualizer")).toBeVisible();
  } else {
    await expect(page.locator(".desktopNav")).toBeVisible();
  }

  const overflows = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 2
  );
  expect(overflows).toBe(false);
});

test("security response headers are present", async ({ request }) => {
  const response = await request.get("/");
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(response.headers()["x-frame-options"]).toBe("SAMEORIGIN");
  expect(response.headers()["permissions-policy"]).toContain("camera=(self)");
});
