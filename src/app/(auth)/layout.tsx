import "@/app/globals.css";
import { Toaster } from 'react-hot-toast'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <Toaster position="top-right" />
          {children}
          </body>
      </html>
    );
  }
  