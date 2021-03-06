import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { ActivateGuard } from "src/app/Services/activate.guard";

const routes: Routes = [
  {
    path: "tasktracker",
    component: TabsPage,
   // pathMatch: 'full',
    // loadChildren: "../tabs/tabs.module#TabsPageModule",
    // pathMatch:'prefix',
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: "../home/home.module#HomePageModule",
          },
        ],
      },
      {
        path: "teamprogress",
        children: [
          {
            path: "",
            loadChildren:
              "../team-progress/team-progress.module#TeamProgressPageModule",
          },
        ],
      },
      {
        path: "taskview",
        children: [
          {
            path: ":taskid",
            loadChildren:
              "../task-subview/task-subview.module#TaskSubviewPageModule",
          },
        ],
      },
      {
        path: "create-subtask",
        children: [
          {
            path: ":taskid",
            canActivate: [ActivateGuard],
            loadChildren:
              "../create-subtask/create-subtask.module#CreateSubtaskPageModule",
          },
        ],
      },
      // {
      //   path: "create-subtask",
      //   children: [
      //     {
      //       path: ":taskid/:subtaskid",
      //       canActivate: [ActivateGuard],
      //       loadChildren:
      //         "../create-subtask/create-subtask.module#CreateSubtaskPageModule",
      //     },
      //   ],
      // },
      {
        path: "mytasks",
        canActivate: [ActivateGuard],
        children: [
          {
            path: "",
            loadChildren: "../tab3/tab3.module#Tab3PageModule",
          },
        ],
      },
      {
        path: "reports",
        children: [
          {
            path: "",
            loadChildren: "../tab2/tab2.module#Tab2PageModule",
          },
        ],
      },
      {
        path: "group-chat",
      //  pathMatch: 'full',
        canActivate: [ActivateGuard],
        children: [
          {
            path: "",
            loadChildren: "../group-chat/group-chat.module#GroupChatPageModule",
          },
        ],
      },
      {
        path: "start-chat",
      //  pathMatch: 'full',
        canActivate: [ActivateGuard],
        children: [
          {
            path: "",
            loadChildren: "../start-chat/start-chat.module#StartChatPageModule",
          },
        ],
      },
      // {
      //   path: "chat",
      //   children: [
      //     {
      //       path: "",

      //       children: [
      //         {
      //           path: ":email/:userid",
      //           loadChildren: "../chat/chat.module#ChatPageModule",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   path: "login",
      //   children: [
      //     {
      //       path: "",
      //       loadChildren: "../login/login.module#LoginPageModule",
      //     },
      //   ],
      // },

      {
        path: "",
        redirectTo: "tasktracker/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "tasktracker/home",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

/* Old Configs

// const routes: Routes = [
//   {
//     path: "",
//     component: TabsPage,
//       // pathMatch: "prefix",
//     // pathMatch:"full",
//     // redirectTo:"team-progress",
//     children: [
//       {
//         path: "team-progress", // loadChildren: () => //   import("../tab1/tab1.module").then((m) => m.Tab1PageModule), // loadChildren:'../tab1/tab1.module#Tab1PageModule',
//         //component:Tab1Page, //Eager Load
//         loadChildren: () =>
//           import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
//       },
//       {
//         path: "reports",
//         loadChildren: () =>
//           import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
//       },
//       {
//         path: "mytasks",
//         loadChildren: () =>
//           import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
//         canActivate: [ActivateGuard],
//       },
//       {
//         path: "home",
//         loadChildren: () =>
//           import("../home/home.module").then((m) => m.HomePageModule),

//       },
//     ],
//   },
// ];
*/
