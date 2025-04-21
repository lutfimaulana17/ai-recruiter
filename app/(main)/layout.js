import DashboardProvider from "./provider";

const DashboardLayout = ({ children }) => {
    return (  
        <div className='bg-secondary'>
            <DashboardProvider>
                <div>
                    {children}
                </div>
            </DashboardProvider>
        </div>
    );
}

export default DashboardLayout;