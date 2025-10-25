# snapdom-micro-app

一、安装依赖(Install dependencies)
```
cd micro-vite-base： npm install
cd micro-vite-vue3： npm install
```


二、启动项目(Start the project)
```
cd micro-vite-base： npm run dev;
cd micro-vite-vue3： npm run dev;
```


三、配置代理(Configure the proxy)
```
Go to micro-vite-base/vite.config.ts and perform the following configuration (set the IP address of the sub-application)：

server: {
  host: '0.0.0.0',
  fs: { strict: false },
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  proxy: {
    '/vite-vue3': {
      target: 'xxxxx/vite-vue3',  // The IP address of the sub-application(micro-vite-vue3), for example: http://192.168.1.21:5174/vite-vue3
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^/vite-vue3`), '')
    }
  }
},
```

四、点击按钮(Click the capture button)
Click the capture button, wait for the screenshot download to complete, and then check it.
