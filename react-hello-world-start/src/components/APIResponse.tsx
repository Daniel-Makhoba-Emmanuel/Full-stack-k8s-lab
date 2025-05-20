
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Loader2 } from 'lucide-react';

interface APIResponseProps {
  isLoading: boolean;
  data: any | null;
  error: string | null;
}

const APIResponse: React.FC<APIResponseProps> = ({ isLoading, data, error }) => {
  return (
    <Card className="bg-slate-800/80 border-green-500/30 backdrop-blur-sm w-full max-w-3xl mx-auto">
      <CardHeader className="border-b border-green-500/20 pb-3">
        <CardTitle className="text-green-400 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime-400 inline-block animate-pulse-soft"></span>
          API Response
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 font-mono text-sm">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 text-green-400 animate-spin" />
            <span className="ml-2 text-green-300">Fetching data from backend...</span>
          </div>
        ) : error ? (
          <div className="text-red-400 bg-red-900/20 p-4 rounded border border-red-500/30">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        ) : data ? (
          <pre className="bg-slate-900/60 p-4 rounded overflow-auto max-h-64 text-green-100">
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <p className="text-slate-400">No data available. Click "Fetch Data" to query the backend.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default APIResponse;
