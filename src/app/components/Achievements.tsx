"use client";

import Image from "next/image";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

interface AchievementsProps {
    achievements: NonNullable<(typeof RESUME_DATA)["achievements"]>;
    className?: string;
}

export function Achievements({ achievements, className }: AchievementsProps) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    if (!achievements || achievements.length === 0) return null;

    const activeAchievement =
        activeIndex !== null ? achievements[activeIndex] : null;

    return (
        <Section className={className}>
            <h2 className="text-xl font-bold" id="achievements-section">
                Achievements
            </h2>
            <ul
                className="mt-2 list-inside list-disc space-y-2 font-mono text-sm text-foreground/80 print:text-[12px]"
                aria-label="List of achievements"
            >
                {achievements.map((achievement, index) => {
                    const hasCertificate = Boolean(achievement.certificateImageUrl);

                    return (
                        <li key={achievement.title}>
                            <button
                                type="button"
                                className="group inline-flex flex-col text-left hover:text-foreground"
                                onClick={() => {
                                    if (!hasCertificate) return;
                                    setActiveIndex(index);
                                    setOpen(true);
                                }}
                                aria-label={
                                    hasCertificate
                                        ? `View certificate for ${achievement.title}`
                                        : achievement.title
                                }
                            >
                                <span className="font-semibold group-hover:underline">
                                    {achievement.title}
                                    {achievement.issuer ? `, ${achievement.issuer}` : ""}
                                    {achievement.date ? ` · ${achievement.date}` : ""}
                                </span>
                                <span>{achievement.description}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>

            {activeAchievement?.certificateImageUrl && (
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>{activeAchievement.title}</DialogTitle>
                        </DialogHeader>
                        <div className="relative mt-2 flex items-center justify-center">
                            <Image
                                src={activeAchievement.certificateImageUrl}
                                alt={
                                    activeAchievement.issuer
                                        ? `${activeAchievement.title} – ${activeAchievement.issuer}`
                                        : activeAchievement.title
                                }
                                width={800}
                                height={480}
                                className="h-auto w-full max-h-[70vh] object-contain"
                            />
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </Section>
    );
}
