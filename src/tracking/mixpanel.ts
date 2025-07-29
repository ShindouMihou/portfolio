import mixpanel from 'mixpanel-browser';

export const initMixpanel = () => {
    mixpanel.init("f3e6d8da9625c3b65e7db9e719ada025", {
        api_host: "https://mxp.storymkr.co",
        autocapture: true,
        autotrack: true,
        record_sessions_percent: 100,
        // @ts-ignore
        record_heatmap_data: true,
        persistence: 'localStorage',
        opt_out_tracking_persistence_type: 'localStorage'
    });

    if (process.env.NODE_ENV === 'development') {
        mixpanel.opt_out_tracking();
    }
}