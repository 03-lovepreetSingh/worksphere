import {
  pgTable,
  varchar,
  text,
  json,
  timestamp,
  integer,
  boolean,
  numeric,
} from "drizzle-orm/pg-core";

// Users Table - For a Freelance Platform
export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(), // UUID as string
  fullName: varchar("full_name", { length: 150 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 256 }).notNull(), // Hashed password

  // Profile info
  profileImage: varchar("profile_image", { length: 512 }),
  bio: text("bio"),
  location: varchar("location", { length: 100 }),

  // Skills & Experience
  skills: json("skills").$type<string[]>(), // Example: ["React", "Node.js"]
  hourlyRate: numeric("hourly_rate", { precision: 10, scale: 2 }), // e.g. 25.50
  rating: numeric("rating", { precision: 2, scale: 1 }).default("5.0"), // 1-5 stars
  completedProjects: integer("completed_projects").default(0),

  // Social Links
  linkedin: varchar("linkedin", { length: 256 }),
  twitter: varchar("twitter", { length: 256 }),
  github: varchar("github", { length: 256 }),

  // Wallets / Payment
  walletAddress: varchar("wallet_address", { length: 256 }),

  // Auth & Status
  isVerified: boolean("is_verified").default(false),
  termsAccepted: boolean("terms_accepted").default(false),

  // Timestamps
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
