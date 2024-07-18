import React from "react";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { Outlet } from "react-router-dom";

import { IonApp, IonContent } from "@ionic/react";

class BaseLayouts extends React.Component {
  render() {
    return (
      <>
        <IonApp>
          <Header />
          <IonContent>
            <div className="p-6 grow">
              <Outlet />
            </div>
            <Footer />
          </IonContent>
        </IonApp>
      </>
    );
  }
}

export default BaseLayouts;
