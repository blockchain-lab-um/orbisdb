import Link from 'next/link';
import { useRouter } from 'next/router';
import { CopyIcon, DashIcon, ExternalLinkIcon, OrbisDBLogo } from "./Icons";
import { useGlobal } from '../contexts/Global';
import { copyToClipboard, getAddress, shortAddress } from '../utils';

export default function Header({showItems}) {
  const { sessionJwt, adminSession, isShared } = useGlobal();

  // Define navigation items and their paths
  const navItems = [
    { title: 'Contexts', path: "/", type: "equal" },
    { title: 'Plugins', path:  "/plugins", type: "includes" },
    { title: 'Data', path:  "/data", type: "includes" },
    { title: 'Playground', path:  "/playground", type: "equal" }
  ];

  async function restart() {
    let result = await fetch("/api/restart", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionJwt}`
      }
    });
    let res = await result.json();
    console.log("res:", res);
    alert("Indexing service restarted.");
  }

  return(
    <div className="bg-white px-12 border-b border-slate-200 w-full flex flex-row items-center">
      <p className="font-monospace mr-4 font-medium"><OrbisDBLogo sizeDivider={10.5} /></p>
      <DashIcon />
      {showItems ?
        <>
          <div className="flex space-x-9 flex-1 flex-row items-center ml-6 text-sm text-slate-500 h-full">
            {navItems.map((item) => (
              <NavItem key={item.title} item={item} />
            ))}
            {!isShared &&
              <NavItem key="Settings" item={{ title: 'Settings', path:  "/settings", type: "equal" }} />
            }
            
          </div>
          {/** 
          <div className='pr-4'>
            <button onClick={() => restart()} className='bg-red-50 border border-dashed hover:border-solid cursor-pointer border-red-200 text-red-600 px-3 py-1 rounded-md text-xs'>Restart</button>
          </div>
          */}

          {isShared &&
            <div className='pr-4'>
              <button className='bg-slate-50 border border-dashed hover:border-solid cursor-pointer border-slate-200 text-slate-600 px-4 py-1 rounded-full text-xxs font-medium items-center flex flex-row space-x-1.5' onClick={() => copyToClipboard(adminSession)}><span>Env: {adminSession}</span><CopyIcon /></button>
            </div>
          }
          <div className='text-sm text-slate-500 '>
            <NavItem key="Documentation" item={{ title: <><span>Documentation</span><ExternalLinkIcon /></>, path:  "https://github.com/OrbisWeb3/db-sdk", type: "equal", target:"_blank" }} />
          </div>
        </>
      :
        <div className="flex space-x-9 flex-row items-center ml-6 text-sm text-slate-500 h-full">
          <NavItem key="Configuration" item={{ title: 'Configuration', path: '/', type: "equal" }} />
        </div>
      }
    </div>
  )
}

const NavItem = ({ item, href }) => {
  const router = useRouter();
  console.log("router.asPath:", router.asPath);

  // Determine whether the current route matches the item's link
  let selected = false;
  if(item.type == "equal") {
    selected = router.asPath === item.path;
  } else if(item.type == "includes") {
    selected = router.asPath.includes(item.path);
  }

  if (selected) {
    return (
      <Link href={item.path} passHref>
        <div className="text-slate-900 text-base border-b border-slate-900 h-full py-4 flex flex-row items-center space-x-1">{item.title}</div>
      </Link>
    );
  } else {
    return (
      <Link href={item.path} passHref target={item.target}>
        <div className="cursor-pointer hover:text-slate-800 h-full py-4 flex flex-row items-center space-x-1">{item.title}</div>
      </Link>
    );
  }
};
