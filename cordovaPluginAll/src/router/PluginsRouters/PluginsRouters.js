// import Carmen from '@/page/Plugins/carmen'
// import scanCode from '@/page/Plugins/scanCode'
// import GPSposition from '@/page/Plugins/GPSposition'
// import Battery from '@/page/Plugins/battery'
// import File from '@/page/Plugins/file/file'
// import Media from '@/page/Plugins/media/media'
// import mediaCapture from '@/page/Plugins/mediaCapture/mediaCapture'
// import Device from '@/page/Plugins/Device/device'
// import deviceMotion from '@/page/Plugins/Device/deviceMotion'
// import deviceOrientation from '@/page/Plugins/Device/deviceOrientation'
// import Network from '@/page/Plugins/network'
// import InAppBrowser from '@/page/Plugins/inappbrowser'
// import fileTransfer from '@/page/Plugins/file/fileTransfer'

const pluginsRouters = [
    {
    path: 'carmen',
    name: 'Carmen',
    // component: Carmen
    component: resolve => require(['@/page/Plugins/carmen'], resolve)
    },
    {
    path: 'scanCode',
    name: 'scanCode',
    // component: scanCode
    component: resolve => require(['@/page/Plugins/scanCode'], resolve)
    },
    {
    path: 'GPSposition',
    name: 'GPSposition',
    // component: GPSposition
    component: resolve => require(['@/page/Plugins/GPSposition'], resolve)
    },
    {
    path: 'battery',
    name: 'Battery',
    // component: Battery
    component: resolve => require(['@/page/Plugins/battery'], resolve)
    },
    {
    path: 'file',
    name: 'file',
    // component: File
    component: resolve => require(['@/page/Plugins/file/file'], resolve)
    },
    {
    path: 'media',
    name: 'media',
    // component: Media
    component: resolve => require(['@/page/Plugins/media/media'], resolve)
    },
    {
    path: 'mediaCapture',
    name: 'mediaCapture',
    // component: mediaCapture
    component: resolve => require(['@/page/Plugins/mediaCapture/mediaCapture'], resolve)
    },
    {
    path: 'device',
    name: 'device',
    // component: Device
    component: resolve => require(['@/page/Plugins/Device/device'], resolve)
    },
    {
    path: 'network',
    name: 'network',
    // component: Network
    component: resolve => require(['@/page/Plugins/network'], resolve)
    },
    {
    path: 'deviceMotion',
    name: 'deviceMotion',
    // component: deviceMotion
    component: resolve => require(['@/page/Plugins/Device/deviceMotion'], resolve)
    },
    {
    path: 'deviceOrientation',
    name: 'deviceOrientation',
    // component: deviceOrientation
    component: resolve => require(['@/page/Plugins/Device/deviceOrientation'], resolve)
    },
    {
    path: 'inappbrowser',
    name: 'inappbrowser',
    // component: InAppBrowser
    component: resolve => require(['@/page/Plugins/inappbrowser'], resolve)
    },
    {
    path: 'fileTransfer',
    name: 'fileTransfer',
    // component: fileTransfer
    component: resolve => require(['@/page/Plugins/file/fileTransfer'], resolve)
    }
]

export default pluginsRouters