import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Sentiment Analysis App",
      description: "Interactive NLP app using Streamlit to analyze text sentiment in real-time.",
      tech: ["Python", "Streamlit", "NLTK"],
      github: "https://github.com/poorav03/sentiment-app",
      demo: "https://sentiment-app.streamlit.app/",
      image: "/sentiment.gif",
    },
    {
      title: "Image Classifier",
      description: "CNN model deployed with Hugging Face Spaces for image recognition.",
      tech: ["PyTorch", "Gradio"],
      github: "https://github.com/username/image-classifier",
      demo: "https://huggingface.co/spaces/username/image-classifier",
      image: "/classifier.gif",
    },
    {
      title: "Data Dashboard",
      description: "Interactive data dashboard built with Plotly Dash and hosted on Render.",
      tech: ["Plotly Dash", "Pandas"],
      github: "https://github.com/username/data-dashboard",
      demo: "https://data-dashboard.onrender.com/",
      image: "/dashboard.gif",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <header className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Poorav Sharma</h1>
        <nav className="flex gap-4">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="p-10 text-center">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-4">
          Machine Learning & Data Science Portfolio
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg">
          I’m a Data Scientist passionate about building interactive machine learning applications, dashboards, and end-to-end data solutions.
        </p>
      </section>

      <section id="projects" className="p-10">
        <h3 className="text-2xl font-bold mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={i} className="shadow-lg rounded-2xl overflow-hidden">
              <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />
              <CardContent className="p-4">
                <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                <p className="mb-3 text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" /> Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="skills" className="p-10 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-2xl font-bold mb-6">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {["Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Azure", "AWS", "Tableau", "Power BI"].map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="p-10 text-center">
        <h3 className="text-2xl font-bold mb-6">Contact</h3>
        <div className="flex justify-center gap-6">
          <a href="mailto:your@email.com" className="hover:text-blue-500"><Mail /></a>
          <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><Linkedin /></a>
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><Github /></a>
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Poorav Sharma. All rights reserved.
      </footer>
    </div>
  );
}
