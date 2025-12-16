import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // DevOps Documentation Sidebar
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Ariba DevOps',
      link: {
        type: 'doc',
        id: 'Ariba DevOps/getting-started',
      },
      items: [
        'Ariba DevOps/getting-started',
        'Ariba DevOps/intro',
        'Ariba DevOps/aks-terraform-deployment',
        'Ariba DevOps/azure-functions-powershell',
        'Ariba DevOps/bluetooth-ble-troubleshooting',
        'Ariba DevOps/azure-devops-security-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      link: {
        type: 'doc',
        id: 'Development/getting-started',
      },
      items: [
        'Development/getting-started',
        'Development/intro',
        'Development/frontend-basics',
        'Development/react-ui-development',
        'Development/state-management',
        'Development/backend-api-development',
        'Development/database-integration',
        'Development/authentication-authorization',
        'Development/microservices-architecture',
        'Development/api-best-practices',
        'Development/websockets-realtime',
        'Development/performance-optimization',
        'Development/cicd-development',
        'Development/deployment-guide',
        'Development/design-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Data',
      link: {
        type: 'doc',
        id: 'Data/getting-started',
      },
      items: [
        'Data/getting-started',
        'Data/intro',
        'Data/data-collection-preprocessing',
        'Data/sql-nosql-fundamentals',
        'Data/data-warehousing',
        'Data/etl-elt-pipelines',
        'Data/data-modeling-schema',
        'Data/data-visualization',
        'Data/machine-learning-fundamentals',
        'Data/ml-models-python',
        'Data/big-data-technologies',
        'Data/realtime-data-streaming',
        'Data/data-security-governance',
        'Data/cloud-data-platforms',
        'Data/data-pipeline-automation',
      ],
    },
    {
      type: 'category',
      label: 'CN Org Structure',
      items: [
        'CN Org Structure/organizational-structure',
      ],
    },
  ],
};

export default sidebars;
