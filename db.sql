USE [seyehat]
GO
/****** Object:  Table [dbo].[bilet_firma_iliskisi]    Script Date: 19.09.2023 16:11:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bilet_firma_iliskisi](
	[id] [uniqueidentifier] NOT NULL,
	[firmaId] [uniqueidentifier] NOT NULL,
	[biletID] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_bilet_firma_iliskisi] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bilet_yolcu_iliskisi]    Script Date: 19.09.2023 16:11:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bilet_yolcu_iliskisi](
	[id] [uniqueidentifier] NOT NULL,
	[yolcuID] [uniqueidentifier] NOT NULL,
	[biletID] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_bilet_yolcu_iliskisi] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[biletler]    Script Date: 19.09.2023 16:11:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[biletler](
	[id] [uniqueidentifier] NOT NULL,
	[biletUcreti] [bigint] NOT NULL,
	[biletAdi] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_biletler] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[firma]    Script Date: 19.09.2023 16:11:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[firma](
	[id] [uniqueidentifier] NOT NULL,
	[firmaAdi] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_firma] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[yolcu]    Script Date: 19.09.2023 16:11:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[yolcu](
	[id] [uniqueidentifier] NOT NULL,
	[ad] [nvarchar](50) NOT NULL,
	[soyad] [nvarchar](50) NOT NULL,
	[tc] [nvarchar](11) NULL,
	[kullaniciAdi] [nvarchar](20) NOT NULL,
	[sifre] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_yolcu] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[yolcu] ([id], [ad], [soyad], [tc], [kullaniciAdi], [sifre]) VALUES (N'3a2ca2e1-3f93-4d6a-81eb-6bd987419e33', N'emin', N'afşin', N'string', N'string', N'string')
INSERT [dbo].[yolcu] ([id], [ad], [soyad], [tc], [kullaniciAdi], [sifre]) VALUES (N'880c84d6-f858-4902-a5d4-d350c484875f', N'string', N'string', N'string', N'string', N'string')
GO
ALTER TABLE [dbo].[bilet_firma_iliskisi] ADD  CONSTRAINT [DF_bilet_firma_iliskisi_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[firma] ADD  CONSTRAINT [DF_firma_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[yolcu] ADD  CONSTRAINT [DF_yolcu_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[bilet_firma_iliskisi]  WITH CHECK ADD  CONSTRAINT [FK_bilet_firma_iliskisi_biletler] FOREIGN KEY([biletID])
REFERENCES [dbo].[biletler] ([id])
GO
ALTER TABLE [dbo].[bilet_firma_iliskisi] CHECK CONSTRAINT [FK_bilet_firma_iliskisi_biletler]
GO
ALTER TABLE [dbo].[bilet_firma_iliskisi]  WITH CHECK ADD  CONSTRAINT [FK_bilet_firma_iliskisi_firma] FOREIGN KEY([firmaId])
REFERENCES [dbo].[firma] ([id])
GO
ALTER TABLE [dbo].[bilet_firma_iliskisi] CHECK CONSTRAINT [FK_bilet_firma_iliskisi_firma]
GO
ALTER TABLE [dbo].[bilet_yolcu_iliskisi]  WITH CHECK ADD  CONSTRAINT [FK_bilet_yolcu_iliskisi_biletler] FOREIGN KEY([biletID])
REFERENCES [dbo].[biletler] ([id])
GO
ALTER TABLE [dbo].[bilet_yolcu_iliskisi] CHECK CONSTRAINT [FK_bilet_yolcu_iliskisi_biletler]
GO
ALTER TABLE [dbo].[bilet_yolcu_iliskisi]  WITH CHECK ADD  CONSTRAINT [FK_bilet_yolcu_iliskisi_yolcu] FOREIGN KEY([yolcuID])
REFERENCES [dbo].[yolcu] ([id])
GO
ALTER TABLE [dbo].[bilet_yolcu_iliskisi] CHECK CONSTRAINT [FK_bilet_yolcu_iliskisi_yolcu]
GO
