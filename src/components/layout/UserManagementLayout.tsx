import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/auth/AppAuthContext";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { MiniRailSidebar } from "@/components/dashboard/MiniRailSidebar";
interface UserManagementLayoutProps {
  children: React.ReactNode;
}
export const UserManagementLayout: React.FC<UserManagementLayoutProps> = ({
  children
}) => {
  const {
    currentUser,
    signOut
  } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut();
    navigate("/");
  };
  const getCurrentDateTime = () => {
    return new Date().toLocaleString("th-TH", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return <div className="min-h-screen bg-[#FAFAFB]">
      {/* Header Bar - เฉพาะหน้า User Management */}
      <div className="h-24 bg-gradient-to-r from-[#f2449e] via-[#fd84d6] to-[#fda0dd] flex items-center justify-between px-6 sticky top-0 z-50">
        <h1 className="text-white font-kanit font-semibold text-2xl">
          Dashboard ข้อเสนอแนะ ข้อร้องเรียน การใช้บริการสาขา
        </h1>
        
        <div className="flex items-center gap-4 text-white font-kanit">
          <div className="text-sm">
            <span>อัปเดตล่าสุด: 31/08/2025  09:49 น.</span>
            
          </div>
          <Button onClick={handleSignOut} variant="ghost" size="sm" className="bg-white/15 hover:bg-white/25 text-white border-0 rounded-full h-9 px-4 font-kanit">
            <LogOut className="h-4 w-4 mr-2" />
            ออกจากระบบ
          </Button>
        </div>
      </div>

      {/* Mini Rail Sidebar */}
      <MiniRailSidebar />

      {/* Main Content Area */}
      <main className="ml-24 px-4 sm:px-6 pt-4 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Content */}
          {children}
        </div>
      </main>
    </div>;
};