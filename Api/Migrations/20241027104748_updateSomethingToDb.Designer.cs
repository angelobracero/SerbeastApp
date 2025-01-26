﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SerBeast_API.Data;

#nullable disable

namespace SerBeast_API.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20241027104748_updateSomethingToDb")]
    partial class updateSomethingToDb
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Comments")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("ProfessionalId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProfessionalId");

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("SerBeast_API.Model.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("Barangay")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Birthday")
                        .HasColumnType("datetime2");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HouseLotBlockNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("MiddleInitial")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("ProfileImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("Rating")
                        .HasColumnType("decimal(4, 2)");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Street")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("SerBeast_API.Model.Booking", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("BookingDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("CancellationReason")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("ProfessionalServiceId")
                        .HasColumnType("int");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("ProfessionalServiceId");

                    b.HasIndex("UserId");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("SerBeast_API.Model.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Home and Property Services"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Professional Services"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Personal Services"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Event Services"
                        },
                        new
                        {
                            Id = 5,
                            Name = "Technology Services"
                        },
                        new
                        {
                            Id = 6,
                            Name = "Automotive Services"
                        },
                        new
                        {
                            Id = 7,
                            Name = "Specialized Services"
                        });
                });

            modelBuilder.Entity("SerBeast_API.Model.ProfessionalService", b =>
                {
                    b.Property<int>("ProfessionalServiceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProfessionalServiceId"));

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(10, 2)");

                    b.Property<string>("ProfessionalId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("ServiceId")
                        .HasColumnType("int");

                    b.HasKey("ProfessionalServiceId");

                    b.HasIndex("ProfessionalId");

                    b.HasIndex("ServiceId");

                    b.ToTable("ProfessionalServices");
                });

            modelBuilder.Entity("SerBeast_API.Model.Service", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Services");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryId = 1,
                            Description = "Repairs, installations, and emergency services.",
                            Title = "Plumbing"
                        },
                        new
                        {
                            Id = 2,
                            CategoryId = 1,
                            Description = "Wiring, installations, and troubleshooting.",
                            Title = "Electrical Work"
                        },
                        new
                        {
                            Id = 3,
                            CategoryId = 1,
                            Description = "Residential, commercial, deep cleaning, and move-in/move-out cleaning.",
                            Title = "Cleaning Services"
                        },
                        new
                        {
                            Id = 4,
                            CategoryId = 1,
                            Description = "Gardening, lawn care, and landscaping design.",
                            Title = "Landscaping"
                        },
                        new
                        {
                            Id = 5,
                            CategoryId = 1,
                            Description = "Repairs, installations, and inspections.",
                            Title = "Roofing"
                        },
                        new
                        {
                            Id = 6,
                            CategoryId = 1,
                            Description = "Heating, ventilation, and air conditioning maintenance and installation.",
                            Title = "HVAC Services"
                        },
                        new
                        {
                            Id = 7,
                            CategoryId = 1,
                            Description = "Extermination and prevention services.",
                            Title = "Pest Control"
                        },
                        new
                        {
                            Id = 8,
                            CategoryId = 1,
                            Description = "Interior and exterior painting services.",
                            Title = "Painting"
                        },
                        new
                        {
                            Id = 9,
                            CategoryId = 1,
                            Description = "Custom furniture, repairs, and installations.",
                            Title = "Carpentry"
                        },
                        new
                        {
                            Id = 10,
                            CategoryId = 2,
                            Description = "Academic tutoring and test preparation.",
                            Title = "Tutoring"
                        },
                        new
                        {
                            Id = 11,
                            CategoryId = 2,
                            Description = "Business consulting for startups or management.",
                            Title = "Consulting"
                        },
                        new
                        {
                            Id = 12,
                            CategoryId = 2,
                            Description = "Document preparation, legal advice, and representation.",
                            Title = "Legal Services"
                        },
                        new
                        {
                            Id = 13,
                            CategoryId = 2,
                            Description = "Accounting, bookkeeping, and financial planning.",
                            Title = "Financial Services"
                        },
                        new
                        {
                            Id = 14,
                            CategoryId = 3,
                            Description = "Haircuts, styling, makeup, and skincare.",
                            Title = "Beauty Services"
                        },
                        new
                        {
                            Id = 15,
                            CategoryId = 3,
                            Description = "Personal training, yoga, and fitness classes.",
                            Title = "Fitness Training"
                        },
                        new
                        {
                            Id = 16,
                            CategoryId = 3,
                            Description = "Babysitting, nanny services, and daycare.",
                            Title = "Childcare"
                        },
                        new
                        {
                            Id = 17,
                            CategoryId = 4,
                            Description = "Event catering for parties, weddings, and corporate events.",
                            Title = "Catering"
                        },
                        new
                        {
                            Id = 18,
                            CategoryId = 4,
                            Description = "Professional photography services for events and portraits.",
                            Title = "Photography"
                        },
                        new
                        {
                            Id = 19,
                            CategoryId = 4,
                            Description = "Planning and coordinating events.",
                            Title = "Event Planning"
                        },
                        new
                        {
                            Id = 20,
                            CategoryId = 5,
                            Description = "Computer repairs, tech support, and network setup.",
                            Title = "IT Support"
                        },
                        new
                        {
                            Id = 21,
                            CategoryId = 5,
                            Description = "Website design, development, and maintenance.",
                            Title = "Web Development"
                        },
                        new
                        {
                            Id = 22,
                            CategoryId = 5,
                            Description = "Branding, logo design, and marketing materials.",
                            Title = "Graphic Design"
                        },
                        new
                        {
                            Id = 23,
                            CategoryId = 6,
                            Description = "General maintenance and repairs.",
                            Title = "Car Repairs"
                        },
                        new
                        {
                            Id = 24,
                            CategoryId = 6,
                            Description = "Car washing and detailing.",
                            Title = "Detailing Services"
                        },
                        new
                        {
                            Id = 25,
                            CategoryId = 7,
                            Description = "Dog walking, pet sitting, and grooming.",
                            Title = "Pet Services"
                        },
                        new
                        {
                            Id = 26,
                            CategoryId = 7,
                            Description = "Packing, loading, and transporting belongings.",
                            Title = "Moving Services"
                        },
                        new
                        {
                            Id = 27,
                            CategoryId = 7,
                            Description = "Home staging and interior design consultations.",
                            Title = "Interior Design"
                        });
                });

            modelBuilder.Entity("SerBeast_API.Model.ServiceLocation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Barangay")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProfessionalId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("ProfessionalId");

                    b.ToTable("ServiceLocations");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("SerBeast_API.Model.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("SerBeast_API.Model.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SerBeast_API.Model.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("SerBeast_API.Model.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Review", b =>
                {
                    b.HasOne("SerBeast_API.Model.ApplicationUser", "Professional")
                        .WithMany()
                        .HasForeignKey("ProfessionalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Professional");
                });

            modelBuilder.Entity("SerBeast_API.Model.Booking", b =>
                {
                    b.HasOne("SerBeast_API.Model.ProfessionalService", "ProfessionalService")
                        .WithMany()
                        .HasForeignKey("ProfessionalServiceId");

                    b.HasOne("SerBeast_API.Model.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ProfessionalService");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SerBeast_API.Model.ProfessionalService", b =>
                {
                    b.HasOne("SerBeast_API.Model.ApplicationUser", "Professional")
                        .WithMany("ProfessionalServices")
                        .HasForeignKey("ProfessionalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SerBeast_API.Model.Service", "Service")
                        .WithMany("ProfessionalServices")
                        .HasForeignKey("ServiceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Professional");

                    b.Navigation("Service");
                });

            modelBuilder.Entity("SerBeast_API.Model.Service", b =>
                {
                    b.HasOne("SerBeast_API.Model.Category", "Category")
                        .WithMany("Services")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("SerBeast_API.Model.ServiceLocation", b =>
                {
                    b.HasOne("SerBeast_API.Model.ApplicationUser", "Professional")
                        .WithMany("ServiceLocations")
                        .HasForeignKey("ProfessionalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Professional");
                });

            modelBuilder.Entity("SerBeast_API.Model.ApplicationUser", b =>
                {
                    b.Navigation("ProfessionalServices");

                    b.Navigation("ServiceLocations");
                });

            modelBuilder.Entity("SerBeast_API.Model.Category", b =>
                {
                    b.Navigation("Services");
                });

            modelBuilder.Entity("SerBeast_API.Model.Service", b =>
                {
                    b.Navigation("ProfessionalServices");
                });
#pragma warning restore 612, 618
        }
    }
}
