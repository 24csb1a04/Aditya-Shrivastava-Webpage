import { details , education } from '../utils/details.js';
export const detailsController = async function(req , res){
    const detail = req.body.detail ? (req.body.detail)  : (null);
    if(!detail){
        return res.status(200).json({detail : details});
    }
    return res.status(200).json({detail : details});
};
export const educationController = async function(req , res){
    const mode = req.body.education ? (req.boby.education) : (null);
    if(!mode){
        return res.status(200).json({education : education});
    }
    return res.status(200).json({education : education[mode]});
};