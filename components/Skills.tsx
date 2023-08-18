import React from "react";
import { SiInformatica } from "react-icons/si";
import Title from "./Title";
import SkillInputs from "./SkillInputs";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<SiInformatica />}></Title>
      <div className="flex flex-wrap gap-4">
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
        <SkillInputs title='Javascript' link='https://www.w3schools.com/js/'></SkillInputs>
      </div>
    </div>
  );
};

export default Skills;
