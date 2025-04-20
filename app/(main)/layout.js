import DashboardProvider from "./provider";

const DashboardLayout = ({ children }) => {
    return (  
        <div>
            <DashboardProvider>
                <div>
                    {children}
                </div>
            </DashboardProvider>
        </div>
    );
}

export default DashboardLayout;