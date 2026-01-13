import  {skills , achievements , extracurricularActivites } from "../utils/work_details.js";
import { fetchLeetcodeData } from "../services/fetchCodingData.js";
export const skillscontroller = async function(req , res){
    const skill = req.body.skill ? (req.body.skill) : (null);
    if(!skill){
        return res.status(200).json({skill : skills});
    }
    return res.status(200).json({skill : skills[skill]});
};
export const achievementscontroller = async function(req , res){
    const achievement = req.body.acheivements ? (req.body.acheivements) : (null);
    if(!achievement){
        return res.status(200).json({achievement : achievements});
    }
    return res.status(200).json({acheivement : achievements[achievement]});
};
export const extracurricularcontroller = async function(req , res){
    const extracurricular = req.body.extracurriculars ? (req.body.extracurriculars) : (null);
    if(!extracurricular){
        return res.status(200).json({extracurricular : extracurricularActivites});
    }
    res.status(200).json({extracurricular : extracurricularActivites[extracurricular]});
};
export const codingController = async function(req , res){
    try{
        const site = req.body.site ? (req.body.site) : (null);
        if(!site){
            const res1 = await fetchLeetcodeData(req , res);
            return res.status(200).json(res1.data);
        }
    }catch(err){
        return res.status(500).json({message : "An error occured"});
    }
};