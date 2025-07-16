
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wallet, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const WalletLogin = () => {
  const [connecting, setConnecting] = useState(false);

  const handleWalletConnect = (walletType: string) => {
    setConnecting(true);
    // Simulate wallet connection
    setTimeout(() => {
      setConnecting(false);
      // Redirect based on user type - for demo purposes, redirect to dashboard
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <Layout>
      
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Connect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-green-500">Wallet</span>
            </h1>
            <p className="text-lg text-gray-600">
              Choose your preferred wallet to access the BeeTrace platform
            </p>
          </div>

          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleWalletConnect('plug')}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Plug Wallet</CardTitle>
                    <CardDescription>Connect with Plug wallet for Internet Computer</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleWalletConnect('stoic')}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Stoic Wallet</CardTitle>
                    <CardDescription>Secure wallet solution for ICP ecosystem</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleWalletConnect('nfid')}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>NFID</CardTitle>
                    <CardDescription>Next-generation identity for Web3</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {connecting && (
            <Card className="mt-6">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Connecting to wallet...</p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Don't have a wallet?{' '}
              <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                Learn how to create one
              </a>
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default WalletLogin;
