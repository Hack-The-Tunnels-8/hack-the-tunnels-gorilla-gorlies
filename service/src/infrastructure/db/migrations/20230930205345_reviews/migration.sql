-- CreateTable
CREATE TABLE "Reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    CONSTRAINT "Reviews_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
