import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Brain, Shield, Camera, Database, AlertTriangle, Lightbulb, Lock, Fingerprint, Notebook as Robot } from 'lucide-react';

function App() {
  const faqData = [
    {
      question: "What is face recognition?",
      answer: "Face recognition is a biometric technology that identifies or verifies a person's identity using their facial features. It's a sophisticated form of biometric authentication that has become increasingly prevalent in modern technology."
    },
    {
      question: "How does face recognition work?",
      answer: "Face recognition works by analyzing facial features like distance between eyes, nose shape, and jawline to create a unique facial signature. The process involves face detection, feature extraction, and pattern matching against a database of known faces."
    },
    {
      question: "Where is face recognition used?",
      answer: "Face recognition is used in various applications including security systems, mobile phone unlocking, law enforcement, retail analytics, social media photo tagging, airport security, and smart home systems."
    },
    {
      question: "Which algorithms are used in face recognition?",
      answer: "Common algorithms include Eigenfaces, Local Binary Patterns Histograms (LBPH), Deep Learning-based Convolutional Neural Networks (CNNs), and more advanced architectures like FaceNet and DeepFace."
    },
    {
      question: "Is face recognition AI or ML?",
      answer: "Face recognition utilizes both AI and ML technologies. It specifically employs deep learning, a subset of machine learning and artificial intelligence, to achieve high accuracy in face detection and recognition tasks."
    },
    {
      question: "What are the challenges of face recognition?",
      answer: "Key challenges include accuracy in different lighting conditions, handling aging and facial changes, privacy concerns, bias in recognition across different demographics, and computational requirements for large-scale deployment."
    },
    {
      question: "How secure is face recognition?",
      answer: "Face recognition security depends on the implementation. Modern systems use liveness detection and anti-spoofing measures to prevent photo/video attacks. When properly implemented, it provides a high level of security comparable to other biometric methods."
    },
    {
      question: "Does face recognition work with masks or sunglasses?",
      answer: "Advanced face recognition systems can work with partial face occlusions, including masks and sunglasses, though accuracy may be reduced. Recent developments in AI have improved recognition capabilities with masked faces, especially important during the pandemic."
    },
    {
      question: "Is face recognition better than fingerprint scanning?",
      answer: "Both methods have their advantages. Face recognition is contactless and more convenient, while fingerprint scanning can be more reliable in certain conditions. The choice depends on specific use cases and security requirements."
    },
    {
      question: "What is the future of face recognition?",
      answer: "The future of face recognition includes improved accuracy through advanced AI, better handling of edge cases, enhanced privacy features, integration with AR/VR technologies, and expanded applications in healthcare and personalized services."
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced AI",
      description: "Powered by state-of-the-art artificial intelligence algorithms"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure",
      description: "Enterprise-grade security for your biometric data"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Real-time Processing",
      description: "Instant face detection and recognition"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Scalable",
      description: "Handle millions of faces with high accuracy"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy-First",
      description: "Advanced encryption and data protection measures"
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Multi-Modal",
      description: "Combine with other biometric methods for enhanced security"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Anti-Spoofing",
      description: "Advanced liveness detection prevents fraudulent attempts"
    },
    {
      icon: <Robot className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Adaptive algorithms that improve over time"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 z-10">
          <Spline scene="https://prod.spline.design/9VMVFDtPmYhSfnJT/scene.splinecode" />
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Face Recognition Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore the future of biometric authentication and discover how face recognition is transforming security and convenience in the digital age.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <a href="#features" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Explore Features
              </a>
              <a href="#faq" className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our face recognition technology combines cutting-edge AI with enterprise-grade security to deliver a robust and reliable biometric solution.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get answers to common questions about face recognition technology and its applications.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg mb-2">Developed by: Milind & Nisarg</p>
              <p className="text-gray-400">Thanks to GSFC University Code Club for providing such opportunities.</p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </footer>

      {/* Background Watermark */}
      <div className="fixed bottom-4 right-4 text-gray-800 text-sm opacity-30 pointer-events-none">
        GSFC University Code Club
      </div>
    </div>
  );
}

export default App;