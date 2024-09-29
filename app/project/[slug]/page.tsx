import { notFound } from "next/navigation";
import ProjectShowcase from "../../../components/Project";
import { projects } from "../../../data/project";
import React from "react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectShowcase project={project} />;
}
