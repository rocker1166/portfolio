"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Play,
  Pause,
  Moon,
  Sun,
  Coffee,
  Zap,
  Leaf,
  Users,
  Globe,
  Palette,
  Shield,
  Rocket,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import RecentProjects from "@/components/RecentProjects";

const iconMap = {
  Zap,
  Leaf,
  Users,
  Globe,
  Palette,
  Shield,
  Rocket,
};

interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  videoUrl: string;
  techStack: string[];
  coolFeatures: {
    icon: string;
    title: string;
    description: string;
  }[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCoffeeCount((prevCount) => (prevCount + 1) % 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex min-h-screen transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
          : ""
      } p-6`}
    >
      <div className="m-auto w-full max-w-6xl space-y-8">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1
            className={`mb-2 text-5xl font-extrabold leading-tight tracking-tighter ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            {project.name}
          </h1>
          <p
            className={`text-2xl font-light ${
              isDarkMode ? "text-emerald-200" : "text-emerald-800"
            }`}
          >
            {project.tagline}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl shadow-2xl"
        >
          <video ref={videoRef} className="w-full" loop muted playsInline>
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="max-w-2xl text-lg font-medium text-white">
              {project.description}
            </p>
          </div>
          <Button
            className="absolute bottom-6 right-6 rounded-full bg-white/20 p-3 backdrop-blur-sm hover:bg-white/30"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {project.techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Badge
                variant="secondary"
                className={`${
                  isDarkMode
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-emerald-200 text-emerald-800 hover:bg-emerald-300"
                }`}
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {project.coolFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`group transition-all ${
                    isDarkMode
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`flex items-center gap-2 text-xl ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      <div
                        className={`rounded-full p-2 transition-all ${
                          isDarkMode
                            ? "bg-white/10 group-hover:bg-white/20"
                            : "bg-emerald-200 group-hover:bg-emerald-300"
                        }`}
                      >
                        {IconComponent && <IconComponent className="h-6 w-6" />}
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={
                        isDarkMode ? "text-emerald-100" : "text-emerald-800"
                      }
                    >
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className={
                isDarkMode
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : "bg-emerald-600 hover:bg-emerald-700"
              }
            >
              Try Live Demo
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className={
                isDarkMode
                  ? "border-white text-white hover:bg-white/20"
                  : "border-emerald-600 text-emerald-600 hover:bg-emerald-100"
              }
            >
              <Github className="mr-2 h-5 w-5" />
              View Source
            </Button>
          </Link>
        </motion.div>
        <RecentProjects />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sun
              className={`h-5 w-5 ${
                isDarkMode ? "text-gray-400" : "text-yellow-500"
              }`}
            />
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
            <Moon
              className={`h-5 w-5 ${
                isDarkMode ? "text-blue-400" : "text-gray-400"
              }`}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Coffee
              className={`h-5 w-5 ${
                isDarkMode ? "text-yellow-400" : "text-yellow-600"
              }`}
            />
            <span
              className={`text-lg font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {coffeeCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
