"use client";

import { motion } from "framer-motion";
import { Compass, Home } from "lucide-react";
import { Button } from "./button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "./empty";

const PRIMARY_ORB_HORIZONTAL_OFFSET = 40;
const PRIMARY_ORB_VERTICAL_OFFSET = 20;

export function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)] text-white">
      <div aria-hidden={true} className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [
              0,
              PRIMARY_ORB_HORIZONTAL_OFFSET,
              -PRIMARY_ORB_HORIZONTAL_OFFSET,
              0,
            ],
            y: [
              0,
              PRIMARY_ORB_VERTICAL_OFFSET,
              -PRIMARY_ORB_VERTICAL_OFFSET,
              0,
            ],
            rotate: [0, 10, -10, 0],
          }}
          className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500/20 to-fuchsia-500/20 blur-3xl"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          animate={{
            x: [
              0,
              -PRIMARY_ORB_HORIZONTAL_OFFSET,
              PRIMARY_ORB_HORIZONTAL_OFFSET,
              0,
            ],
            y: [
              0,
              -PRIMARY_ORB_VERTICAL_OFFSET,
              PRIMARY_ORB_VERTICAL_OFFSET,
              0,
            ],
          }}
          className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-violet-400/12 to-pink-400/12 blur-3xl"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_35%),linear-gradient(to_bottom,rgba(6,2,15,0.3),rgba(0,0,0,0.95))]" />
      </div>

      <Empty className="relative z-10">
        <EmptyHeader>
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/40">
            Lost In The Void
          </p>
          <EmptyTitle className="text-8xl font-extrabold tracking-[-0.08em] md:text-[10rem]">
            404
          </EmptyTitle>
          <EmptyDescription className="max-w-xl text-base leading-7 text-white/58 md:text-lg">
            The page you&apos;re looking for may have moved, expired, or never
            existed in this universe.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-w-36 rounded-full">
              <a href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-36 rounded-full border-white/14"
            >
              <a
                href="https://app.synthra.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Compass className="mr-2 h-4 w-4" />
                Launch App
              </a>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
