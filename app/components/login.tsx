"use client";
import { ConnectButton ,lightTheme ,ThirdwebProvider, useReadContract } from "thirdweb/react";
import { chain, client, CONTRACT } from "../utils/constants";
import "../globals.css";




const customTheme = lightTheme({
    colors: {
      modalBg: "pink",
    },
  });
const Login: React.FC = () =>{

  
    return(
        <div>
           
            <ConnectButton  client={client}chain={chain}
                 
                 theme={customTheme}
                 connectModal={{
                    size: "wide",
                    titleIcon: "",
                    showThirdwebBranding: false,
                   
                  }}
                  connectButton={{
                    label: "Login Wallet",
                    className: "Wallet",
                    style : {
                        paddingTop: "0.5rem",
                        paddingBottom:"0.5rem",
                        paddingRight:"1rem",
                        paddingLeft:"1rem",
                        borderRadius:"9999px",
                        background:"#2563eb",
                        borderRightWidth:"1px",
                     
                    }
                    
                }}
            ></ConnectButton>
              
               </div>
            
          
    )
};

export default Login;