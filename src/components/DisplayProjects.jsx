import React from "react";
import Card from "./Cards";
import { images } from "../constants";

export default function DisplayProjects(props) {


    if (props.project === "mern") {
        return (
            <div className="display-project-name-container">
                <h2>Mern Projects</h2>

                <div className="display-card">
                    <Card title="mern" url={images.mernStack} name="Mern Application" />
                    <Card title="mern" url={images.mernStack} name="Mern Application" />
                    <Card title="mern" url={images.mernStack} name="Mern Application" />
                    <Card title="mern" url={images.mernStack} name="Mern Application" />
                    <Card title="mern" url={images.mernStack} name="Mern Application" />
                    <Card title="mern" url={images.mernStack} name="Mern Application" />
                    <Card title="mern" url={images.mernStack} name="Mern Application" />
                </div>
            </div>

        );
    }

    else if (props.project === "ml") {
        return (
            <div className="display-project-name-container">
                <h2>Machine Learning Projects</h2>
                <div className="display-card">
                    <Card title="front-end" url={images.machineLearning} name="Machine Learning" />
                    <Card title="front-end" url={images.machineLearning} name="Machine Learning" />
                    <Card title="front-end" url={images.machineLearning} name="Machine Learning" />
                    <Card title="front-end" url={images.machineLearning} name="Machine Learning" />
                    <Card title="front-end" url={images.machineLearning} name="Machine Learning" />
                    <Card title="front-end" url={images.machineLearning} name="Machine Learning" />
                    <Card title="front-end" url={images.machineLearning} name="Machine Learning" />
                </div>
            </div>

        );
    }
    else {
        return (

            <div className="display-project-name-container">
                <h2>Frontend Projects</h2>
                <div className="display-card">
                    <Card title="front-end" url={images.frontend} name="web Application" />
                    <Card title="front-end" url={images.frontend} name="web Application" />
                    <Card title="front-end" url={images.frontend} name="web Application" />
                    <Card title="front-end" url={images.frontend} name="web Application" />
                    <Card title="front-end" url={images.frontend} name="web Application" />
                    <Card title="front-end" url={images.frontend} name="web Application" />
                    <Card title="front-end" url={images.frontend} name="web Application" />
                </div>
            </div>
        );
    }
}