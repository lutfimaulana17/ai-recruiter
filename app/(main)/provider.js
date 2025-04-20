import AppSideBar from '@/components/dashboard/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar'

const DashboardProvider = ({ children }) => {
    return (  
        <SidebarProvider>
            <AppSideBar />
            <div>
                {children}
            </div>
        </SidebarProvider>
    );
}

export default DashboardProvider;
