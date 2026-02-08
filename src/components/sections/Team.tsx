"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TEAM_MEMBERS } from "@/lib/constants";
import { StaggerChildren, staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export function Team() {
  return (
    <SectionWrapper id="team">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          who we are
        </h2>
        <p className="mt-6 text-lg text-white/50 leading-relaxed">
          meet the founders building AI-native from the ground up.
        </p>
      </div>

      <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {TEAM_MEMBERS.map((member, idx) => (
          <motion.div
            key={idx}
            variants={staggerItemVariants}
            className="text-center gradient-card rounded-xl border border-white/[0.06] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:glow-blue"
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <h3 className="font-poppins font-semibold text-xl text-white">
              {member.name}
            </h3>
            <p className="text-white/50 mt-1 mb-4">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-blue hover:text-brand-blue-light transition-colors"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        ))}
      </StaggerChildren>

      {/* Extended founder bios */}
      <div className="max-w-3xl mx-auto mt-16 space-y-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <motion.div
            key={`bio-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className="border-l-2 border-brand-blue/20 pl-6"
          >
            <h4 className="font-poppins font-semibold text-white mb-2">
              {member.name.split(" ")[0].toLowerCase()}
            </h4>
            <p className="text-white/50 leading-relaxed text-sm">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
