import AppSideBar from '@/components/dashboard/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar'
import WelcomeContainer from '@/components/dashboard/WelcomeContainer'

const DashboardProvider = ({ children }) => {
    return (  
        <SidebarProvider>
            <AppSideBar />
            <div className="w-full p-10">
                <WelcomeContainer />
                {children}
            </div>
        </SidebarProvider>
    );
}

export default DashboardProvider;
