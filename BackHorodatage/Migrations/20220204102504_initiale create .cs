using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BackHorodatage.Migrations
{
    public partial class initialecreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "public");

            migrationBuilder.CreateTable(
                name: "User",
                schema: "public",
                columns: table => new
                {
                    IdUser = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nom = table.Column<string>(type: "varchar(100)", nullable: true),
                    Prenom = table.Column<string>(type: "varchar(100)", nullable: true),
                    Poste = table.Column<string>(type: "varchar(100)", nullable: true),
                    Email = table.Column<string>(type: "varchar(100)", nullable: true),
                    Role = table.Column<string>(type: "varchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.IdUser);
                });

            migrationBuilder.CreateTable(
                name: "HorodatageUser",
                schema: "public",
                columns: table => new
                {
                    IdHorodatage = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    IdUser = table.Column<int>(type: "integer", nullable: false),
                    UserIdUser = table.Column<int>(type: "integer", nullable: true),
                    DateArrival = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DateDeparture = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HorodatageUser", x => x.IdHorodatage);
                    table.ForeignKey(
                        name: "FK_HorodatageUser_User_UserIdUser",
                        column: x => x.UserIdUser,
                        principalSchema: "public",
                        principalTable: "User",
                        principalColumn: "IdUser");
                });

            migrationBuilder.CreateTable(
                name: "login",
                columns: table => new
                {
                    IdLogin = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserIdUser = table.Column<int>(type: "integer", nullable: true),
                    Pseudo = table.Column<string>(type: "text", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_login", x => x.IdLogin);
                    table.ForeignKey(
                        name: "FK_login_User_UserIdUser",
                        column: x => x.UserIdUser,
                        principalSchema: "public",
                        principalTable: "User",
                        principalColumn: "IdUser");
                });

            migrationBuilder.CreateIndex(
                name: "IX_HorodatageUser_UserIdUser",
                schema: "public",
                table: "HorodatageUser",
                column: "UserIdUser");

            migrationBuilder.CreateIndex(
                name: "IX_login_UserIdUser",
                table: "login",
                column: "UserIdUser");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HorodatageUser",
                schema: "public");

            migrationBuilder.DropTable(
                name: "login");

            migrationBuilder.DropTable(
                name: "User",
                schema: "public");
        }
    }
}
