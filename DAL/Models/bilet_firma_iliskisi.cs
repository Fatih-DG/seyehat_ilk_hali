﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class bilet_firma_iliskisi
    {
        public Guid id { get; set; }
        public Guid firmaId { get; set; }
        public Guid biletID { get; set; }

        public virtual biletler bilet { get; set; }
        public virtual firma firma { get; set; }
    }
}