
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Layers, Code, Server, Database, Shield, Loader } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import APIResponse from './APIResponse';

// Updated API function to fetch from the backend via Nginx proxy
const fetchFromBackend = async () => {
  // This request will go to Nginx (e.g., http://localhost:3000/api/)
  // Nginx will then proxy it to your Go API service at http://api:8080/
  // since your Go API has a "/" route, this should work directly.
  const response = await fetch('/api/'); // The path /api/ is what Nginx listens for

  if (!response.ok) {
    // Try to get more detailed error information from the response
    const errorBody = await response.text(); // Or response.json() if your API returns JSON errors
    throw new Error(`Network response was not ok. Status: ${response.status}. Body: ${errorBody}`);
  }
  return response.json(); // Assuming your Go API returns JSON.
                         // If it returns plain text or something else, adjust accordingly (e.g., response.text())
};

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiData, setApiData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleFetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchFromBackend();
      setApiData(data);
    } catch (err) {
      setError("Failed to fetch data from the backend.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 via-slate-900 to-emerald-950 px-4 relative overflow-hidden">
      {/* Mesh grid background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 border-2 border-emerald-400 rounded"
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            y: [0, -10, 0, 10, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-32 h-16 border-2 border-green-400 rounded-lg"
          animate={{
            rotate: [0, -20, 0, 20, 0],
            x: [0, 20, 0, -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-40 w-24 h-24 border-2 border-lime-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="text-center z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="mb-6">
          <motion.div 
            className="inline-block"
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center mb-4 space-x-4">
              <Container className="w-12 h-12 text-green-400" />
              <Separator orientation="vertical" className="h-10 bg-emerald-500/30" />
              <Layers className="w-12 h-12 text-emerald-400" />
            </div>
          </motion.div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent font-heading">
          Quantum Platform
        </h1>
        
        <div className="flex justify-center items-center my-4">
          <div className="h-0.5 w-12 bg-green-500 mx-2"></div>
          <Server className="text-lime-400 h-5 w-5" />
          <div className="h-0.5 w-12 bg-emerald-500 mx-2"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto font-body leading-relaxed">
          Enterprise-grade application platform powered by Kubernetes and Docker.
          <br />
          <span className="text-lime-300 text-lg">Containerized. Orchestrated. Seamless.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white">
              <Code className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-900/20">
              <Database className="mr-2 h-4 w-4" />
              Applications
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button 
              variant="outline" 
              className="border-green-500 text-green-400 hover:bg-green-900/20"
              onClick={handleFetchData}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Server className="mr-2 h-4 w-4" />
              )}
              Fetch Data
            </Button>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-lg mx-auto mb-10">
          <motion.div 
            className="p-6 bg-slate-800/60 border border-green-500/30 rounded-lg backdrop-blur-sm w-full md:w-[45%]"
            whileHover={{ y: -5, borderColor: '#10b981' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Container className="w-10 h-10 text-green-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Containerized</h3>
            <p className="text-green-100 text-sm">Our platform runs on Docker containers for consistent deployments across environments.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-slate-800/60 border border-emerald-500/30 rounded-lg backdrop-blur-sm w-full md:w-[45%]"
            whileHover={{ y: -5, borderColor: '#10b981' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Layers className="w-10 h-10 text-emerald-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Orchestrated</h3>
            <p className="text-green-100 text-sm">Powered by Kubernetes for automatic scaling, deployment, and management of applications.</p>
          </motion.div>
        </div>
        
        {/* API Response Display Box */}
        <motion.div
          className="w-full mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <APIResponse isLoading={isLoading} data={apiData} error={error} />
        </motion.div>
        
        <div className="text-center text-green-200 text-sm max-w-lg mx-auto px-4">
          <Shield className="inline-block text-lime-400 h-4 w-4 mr-2" />
          <span>Secure and reliable with enterprise-grade infrastructure running on Kubernetes and Docker.</span>
        </div>
      </motion.div>
      
      <footer className="absolute bottom-6 text-green-300 text-sm z-10">
        © {new Date().getFullYear()} Quantum Technologies
      </footer>
    </div>
  );
};

export default HomePage;
