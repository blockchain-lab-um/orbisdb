import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Alert from "../components/Alert";
import ConfigurationSettings from "../components/ConfigurationSettings";
import Link from "next/link";

/** Import Context */
import { GlobalProvider, useGlobal } from "../contexts/Global";
import '../styles/globals.css'
import Auth from "./auth";
import Button from "../components/Button";
import { STATUS } from "../utils";
import { OrbisDBLogo } from "../components/Icons";

export default function App({ Component, pageProps }) {
  return(
    <GlobalProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </GlobalProvider>
  )
}

function AppContent({Component, pageProps}) {
  const { settings, settingsLoading, adminLoading, isAdmin, isConnected, isConfigured, isShared } = useGlobal();

  useEffect(() => {
    console.log("settings:", settings);
  }, [settings]);

  useEffect(() => {
    console.log("adminLoading:", adminLoading);
  }, [adminLoading]);

  useEffect(() => {
    console.log("isShared:", isShared);
  }, [isShared]);

  /** Admin details are loading */
  if(adminLoading || settingsLoading) {
    return(
      <div className="h-full w-full flex flex-col">
        <p className="text-base w-full text-center pt-12">Loading settings...</p>
      </div>
    )
  }

  // If instance is a shared instance and user hasn't selected a slot yet
  /*else if(isShared && !slot) {
    return(
      <div className="h-full w-full flex flex-col">
        <Header showItems={false} />
        <PickSlot />
      </div>
    )
  }*/

  // User is not connected and instance is not configured
  else if(!isConfigured && !isConnected) {
    console.log("User is not connected and instance is not configured");
    return(
      <div className="h-full w-full flex flex-col">
        <Header showItems={false} />
        <ConfigurationSetup />
      </div>
    )
  }

  // Admin is not connected and instance is configured
  else if(!isConnected && isShared) {
    return(
      <div className="h-full w-full flex flex-col">
        <Auth />
      </div>
    )
  }

  // Admin is not connected and instance is configured
  else if(!isConnected && isConfigured) {
    console.log("Admin is not connected and instance is configured");
    return(
      <div className="h-full w-full flex flex-col">
        <Auth />
      </div>
    )
  }

  // User is not connected and the instance is configured 
  else if(!isConnected && !isAdmin && isConfigured) {
    return(
      <div className="h-full w-full flex flex-col">
        <Alert title={"You are connected but not the admin, please login with a different account."} />
        <Auth />
      </div>
    )
  }

  /** User is connected but not admin */
  else if(!adminLoading && !isAdmin && isConfigured) {
    return(
      <div className="h-full w-full flex flex-col">
        <Auth />
      </div>
    )
  }

  /** User has finalized configuration, render app */
  else if(settings?.configuration?.admins && !isShared) {
    console.log("settings?.configuration?.admins:", settings?.configuration?.admins);
    return(
      <div className="h-full w-full flex flex-col">
        <Header showItems={true} />
        <Component {...pageProps} />
      </div>
    )
  } else if(!settings?.configuration && isShared) {
    return(
      <div className="h-full w-full flex flex-col">
        <Header showItems={false} />
        <ConfigurationSharedSetup />
      </div>
    )
  } else {
    return(
      <div className="h-full w-full flex flex-col">
        <Header showItems={true} />
        <Component {...pageProps} />
      </div>
    )
  }
}

function PickSlot() {
  const { slots } = useGlobal();
  return(
    <div className="px-16 py-12 w-2/3">
      <h1 className="text-3xl font-bold text-slate-900">Slots</h1>
      <p className="text-slate-600 mt-1 text-base">This is a shared instance with multiple slots assigned to different projects, pick the slot you want to use.</p>
      <div className="flex flex-col mt-4">
        {(slots && slots.length > 0) ?
          <div className="grid grid-cols-2 gap-4 items-start mb-4">
            <LoopSlots slots={slots} />
          </div>
        :
          <div className="flex justify-center w-full">
            <Alert title="There isn't any slot configured by the admin here" />
          </div>
        }
        <div className="flex flex-col w-full items-center">
          {/**<Button type="primary" onClick={() => setAddModalVis(true)} title="+ Create Slot" />*/}
        </div>    
      </div>
    </div>
  )
}

const LoopSlots = ({slots}) => {
  return slots.map((slot, key) => {
    return (
        <div key={key} className="flex flex-row bg-white px-4 py-3 border border-slate-200 rounded-md items-center">
          <Link className="text-[#4483FD] font-medium text-base hover:underline" href={"/" + slot.id}>{slot.title}</Link>
        </div>
    );
  });
}

const ConfigurationSharedSetup = () => {
  const { isShared, adminSession, sessionJwt, setSettings } = useGlobal();
  const [status, setStatus] = useState(STATUS.ACTIVE);

  useEffect(() => {
    console.log("sessionJwt:", sessionJwt);
  }, [sessionJwt])
  
  async function configure() {
    setStatus(STATUS.LOADING);
    try {
      let response = await fetch('/api/settings/setup-configuration-shared', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`
        }
      });

      response = await response.json();
      console.log("Configuration results:", response);
      if(response.status == 200) {
        setStatus(STATUS.SUCCESS);
        setSettings(response.updatedSettings);
      }
    } catch(e) {
      console.log("Error setup config:", e);
    }
  }

  return(
    <div className="flex justify-center flex-col items-center pt-12">
      <div>
          <OrbisDBLogo />
      </div>
      <div className="w-1/3 flex flex-col mt-6 bg-white border border-slate-200 p-6 rounded-md">
        <p className="font-medium text-center">You are new here!</p>
        <p className="text-base text-slate-600 mb-1 text-center">To get started, let's configure your personal OrbisDB instance.</p>

        {/** If shared instance we display the user's did */}
        {isShared &&
          <span className="bg-slate-100 rounded-full text-xxs px-3 py-1 mb-2">{adminSession}</span>
        }

        {isShared &&
          <Alert className="text-xs mt-1 mb-3" title={<><b>Note:</b> This will create your own slot in this OrbisDB instance which will give you the ability to write and query data from Ceramic easily.</>}/>
        }
        <Button onClick={() => configure()} title="Configure instance" status={status} />
      </div>
    </div>
  )
}

function ConfigurationSetup() {
  const { isShared, adminSession } = useGlobal();
  return(
    <div className="flex justify-center">
      <div className="w-1/3 flex flex-col mt-12 bg-white border border-slate-200 p-6 rounded-md">
        <p className="font-medium text-center">Welcome to OrbisDB</p>
        <p className="text-base text-slate-600 mb-4 text-center">To get started, let's configure your OrbisDB instance.</p>
        <ConfigurationSettings />
      </div>
    </div>
  )
}