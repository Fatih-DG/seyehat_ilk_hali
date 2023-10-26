using AutoMapper;
using DAL;
using DAL.Models;
using Models;
namespace Net6.JWT.Mapping
{
    public class MapperConfig:Profile
    {
        public MapperConfig()
        {
            
            CreateMap<yolcu, YolcuEklemeYK>().ReverseMap();


        }
    }
}