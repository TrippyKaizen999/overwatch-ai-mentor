import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, File, CheckCircle, AlertCircle, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...newFiles]);
    
    toast({
      title: "Files uploaded!",
      description: `${newFiles.length} replay file(s) ready for analysis.`,
    });
  }, [toast]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      
      toast({
        title: "Files uploaded!",
        description: `${newFiles.length} replay file(s) ready for analysis.`,
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upload Your Replays</h2>
            <p className="text-xl text-muted-foreground">
              Drag and drop your .owrep files or click to browse
            </p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-2 border-dashed border-border hover:border-primary transition-all duration-300">
            <CardContent className="p-8">
              <div
                className={`relative rounded-lg border-2 border-dashed transition-all duration-300 p-12 text-center ${
                  dragActive 
                    ? "border-primary bg-primary/10" 
                    : "border-muted hover:border-primary/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept=".owrep"
                  onChange={handleFileInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <Upload className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Drop replay files here</h3>
                <p className="text-muted-foreground mb-6">
                  Supports .owrep files up to 100MB each
                </p>
                <Button variant="outline-gaming">
                  Browse Files
                </Button>
              </div>
              
              {files.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Uploaded Files</h4>
                  <div className="space-y-3">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <File className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm font-medium">{file.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                        <CheckCircle className="h-5 w-5 text-gaming" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <Button variant="gaming" size="lg">
                      <Brain className="h-5 w-5" />
                      Analyze Replays
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};