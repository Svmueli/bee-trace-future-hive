
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "@/lib/routes";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AccessibilityProvider>
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route 
                key={path} 
                path={path} 
                element={<Component />} 
              />
            ))}
          </Routes>
        </BrowserRouter>
      </AccessibilityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
