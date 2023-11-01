import React, { useState, useEffect, useContext } from "react";
import Link from 'next/link';
import { GlobalContext } from "../../contexts/Global";
import { findContextById, getPluginsByContext, findParentContextId } from "../../utils";
import { useRouter } from 'next/router'
import { ContextTags } from "../../components/ContextDetails";
import Alert from "../../components/Alert";
import AddContextModal from "../../components/Modals/AddContext";
import Button from "../../components/Button";

export default function ContextDetails() {
  const { settings, setSettings } = useContext(GlobalContext);
  const [context, setContext] = useState();
  const [plugins, setPlugins] = useState([]);
  const [parentContext, setParentContext] = useState();
  const [addModalVis, setAddModalVis] = useState(false);

  /** Use Next router to get conversation_id */
  const router = useRouter();
  const { context_id } = router.query;

  useEffect(() => {
    if(context_id) {
      loadContextDetails();
      loadContextPlugins();
      console.log("settings.contexts", settings.contexts);
      let result = findParentContextId(context_id, settings.contexts ? settings.contexts : null);
      console.log("result findParentContext:", result);
      setParentContext(result);
    }

    async function loadContextDetails() {
      let _context = findContextById(settings.contexts, context_id);
      setContext(_context);
      console.log("context:", context);
    }

    function loadContextPlugins() {
      let results = getPluginsByContext(context_id, settings.plugins);
      setPlugins(results);
      console.log("plugins installed:", results);
    }
  }, [context_id]);


  if(!context) {
    return(
      <div className="flex flex-row space-x-8">
        <div className="px-16 py-12 md:w-2/3">Loading...</div>
      </div>
    )
  }

  return(
    <>
      <div className="flex flex-row space-x-8">
        {/** Context details */}
        <div className="flex px-16 py-12 md:w-2/3 flex-col">
          {/** Context details */}
          <div className="flex flex-row items-center">
            {parentContext &&
              <Link href={"/contexts/" + parentContext} className="rounded-full bg-white w-10 h-10 flex justify-center items-center cursor-pointer border border-slate-200 hover:border-slate-300 mr-3">
                <svg width="7" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79062 0.230169C6.07772 0.528748 6.06841 1.00353 5.76983 1.29063L1.83208 5L5.76983 8.70938C6.06841 8.99647 6.07772 9.47125 5.79062 9.76983C5.50353 10.0684 5.02875 10.0777 4.73017 9.79063L0.230167 5.54063C0.0831082 5.39922 -1.18115e-06 5.20401 -1.17223e-06 5C-1.16331e-06 4.79599 0.0831082 4.60078 0.230167 4.45938L4.73017 0.209376C5.02875 -0.077719 5.50353 -0.0684095 5.79062 0.230169Z" fill="#0F172A"/>
                </svg>
              </Link>
            }
            {context.logo &&
              <img src={context.logo} className="mr-3 h-20 w-20 rounded-md" />
            }
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-slate-900">{context.name}</h1>
              <div className="mt-2">
                <ContextTags context={context} />
              </div>
            </div>
          </div>

          {/** Sub-contexts card */}
          <div className="w-full bg-white border border-slate-200 rounded-md px-6 py-6 mt-12 flex flex-col">
            <h2 className="text-lg font-bold text-slate-900">Sub-contexts</h2>
            <p className="text-base text-slate-600">Create sub-contexts to have a more granular way to manage data in your application.</p>
            <div className="flex flex-col mt-3 space-y-1">
              {(context.contexts && context.contexts.length  > 0) ?
                <Contexts contexts={context.contexts} />
              :
                <div className="flex justify-center">
                  <Alert title="This context doesn't have any sub-contexts." />
                </div>
              }
            </div>
            <div className="flex flex-col w-full items-center mt-4">
              <Button title="+ Add sub-context" onClick={() => setAddModalVis(true)}  />
            </div>
          </div>

          {/** Plugins card */}
          <div className="w-full bg-white border border-slate-200 rounded-md px-6 py-6 mt-6 flex flex-col">
            <h2 className="text-lg font-bold text-slate-900">Plugins used</h2>
            <p className="text-base text-slate-600 mb-1">Manage the plugins being used in this context.</p>
            {/** Display plugins installed on parent context if this context has a parent context. */}
            {parentContext &&
              <>
                <span className="font-medium text-base mt-2">From parent:</span>
                <div className="flex flex-col mt-2 space-y-1">
                  {plugins.parent.length > 0 ?
                    <PluginsInstalled plugins={plugins.parent} />
                  :
                    <div className="flex justify-center">
                      <Alert title="There aren't any plugins installed on the parents." />
                    </div>
                  }
                </div>
              </>
            }

            <span className="font-medium text-base mt-2">Direct:</span>
            <div className="flex flex-col space-y-1">
              {plugins.direct.length > 0 ?
                <PluginsInstalled plugins={plugins.direct} />
              :
                <div className="flex justify-center">
                  <Alert title="There aren't any plugins installed on this context." />
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      {/** Will display the add context modal */}
      {addModalVis &&
        <AddContextModal parentContext={context_id} hide={() => setAddModalVis(false)} />
      }
    </>
  )
}

const Contexts = ({contexts}) => {
  return contexts?.map((context, key) => (
    <>
      <Link className="text-base text-[#4483FD] hover:underline" href={"/contexts/" + context.stream_id} key={key}>·  {context.name}</Link>
      {(context.contexts && context.contexts.length > 0) &&
        <div className="flex flex-col pl-4 mt-1">
          <Contexts contexts={context.contexts} />
        </div>
      }
    </>
  ));
}

const PluginsInstalled = ({plugins}) => {
  return plugins?.map((plugin, key) => (
    <Link className="text-base text-[#4483FD] mb-1 hover:underline" href={"/plugins/" + plugin.plugin_id} key={key}>·  {plugin.plugin_id}</Link>
  ));
}
