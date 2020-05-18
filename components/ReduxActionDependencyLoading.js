import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { useDispatch } from "react-redux";
import _ from "lodash";

import LoadingView from "../components/LoadingView";

const ReduxActionDependencyLoading = forwardRef((props, ref) => {
    const mountedRef = useRef(true);
    const dispatch = useDispatch();
    const dependencies = props.dependencies;
    const LoadedView = props.loadedView;

    if (!dependencies) throw new Error("dependencies prop missing!");
    if (!_.isArray(dependencies)) throw new Error("dependencies prop must be array!");
    if (!LoadedView) throw new Error("loadedView prop missing!");
    if (!_.isFunction(LoadedView)) throw new Error("loadedView prop must be a function!");
    

    const [loading, setLoading] = useState(true);

    const load = silentReload => {
        if (!silentReload) setLoading(true);
        const loader = async () => {
            for (const dependency of dependencies) {
                if (!mountedRef.current) break;
                await dispatch(dependency());
            }
        };
        loader().then(() => {if(mountedRef.current) setLoading(false)});
    };

    useEffect(() => {
        load();
    }, [dispatch]);

    useImperativeHandle(ref, () => {
        return {
          load: load
        };
      });

      useEffect(() => {
        return () => { 
          mountedRef.current = false
        }
      }, [])

    return loading ? (<LoadingView />) : (<LoadedView />);
});

export default ReduxActionDependencyLoading;
