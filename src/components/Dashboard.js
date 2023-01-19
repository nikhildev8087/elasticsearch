import React from 'react'

const data = `<iframe src="https://502751400bdc4be0a185dc98a54aa28f.us-central1.gcp.cloud.es.io:9243/app/kibana#/dashboards/view/ca7461e0-970c-11ed-bde9-95c2649e55d9" height="600" width="800"></iframe>`;
const Dashboard = () => {
  return (
    <>
    <div dangerouslySetInnerHTML={{__html: data}}>
      
    </div>

    <div>
    <iframe src="https://502751400bdc4be0a185dc98a54aa28f.us-central1.gcp.cloud.es.io:9243/app/dashboards#/view/ca7461e0-970c-11ed-bde9-95c2649e55d9?embed=true&_g=private-9nyi9dgr7to4sbbtba4qauea" height="600" width="800"></iframe>
    </div>
    </>
  )
}

export default Dashboard
