"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/constants";

export function Team() {
  return (
    <section id="team" className="py-2 sm:py-6 sm:px-6">
      <div className="container mx-auto">
        <div className="section-container p-5 sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              team
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              who we are
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-6 max-w-3xl">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-border rounded-xl p-4 sm:p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
