/* HardHits SQL Server starter schema
   Apply in the target database before running the Python loader. */

IF OBJECT_ID('dbo.hr_model_predictions', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.hr_model_predictions (
        hr_model_prediction_id bigint IDENTITY(1,1) NOT NULL PRIMARY KEY,
        model_date date NOT NULL,
        player_name nvarchar(150) NOT NULL,
        team_code nvarchar(10) NOT NULL,
        probability decimal(5,2) NULL,
        opp_pitcher nvarchar(150) NULL,
        max_ev decimal(6,2) NULL,
        fb_ev decimal(6,2) NULL,
        barrel_pct decimal(6,2) NULL,
        ev_trend_label nvarchar(40) NULL,
        ev_trend_val decimal(6,2) NULL,
        lineup_slot nvarchar(20) NULL,
        expected_pa decimal(4,1) NULL,
        lineup_status nvarchar(80) NULL,
        power_score smallint NULL,
        form_score smallint NULL,
        trend_score smallint NULL,
        park_score smallint NULL,
        pitcher_score smallint NULL,
        platoon_score smallint NULL,
        history_score smallint NULL,
        weather_score smallint NULL,
        source_file nvarchar(260) NOT NULL,
        imported_at_utc datetime2 NOT NULL CONSTRAINT DF_hr_model_predictions_imported_at DEFAULT SYSUTCDATETIME()
    );
END;
GO

IF OBJECT_ID('dbo.hr_results', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.hr_results (
        hr_result_id bigint IDENTITY(1,1) NOT NULL PRIMARY KEY,
        result_date date NOT NULL,
        player_name nvarchar(150) NOT NULL,
        team_name nvarchar(120) NULL,
        pitcher_name nvarchar(150) NULL,
        pitcher_team nvarchar(120) NULL,
        exit_velocity decimal(6,2) NULL,
        launch_angle decimal(6,2) NULL,
        distance_ft decimal(7,2) NULL,
        result_status nvarchar(80) NULL,
        source_file nvarchar(260) NOT NULL,
        imported_at_utc datetime2 NOT NULL CONSTRAINT DF_hr_results_imported_at DEFAULT SYSUTCDATETIME()
    );
END;
GO

IF OBJECT_ID('dbo.hrbi_model_predictions', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.hrbi_model_predictions (
        hrbi_model_prediction_id bigint IDENTITY(1,1) NOT NULL PRIMARY KEY,
        model_date date NOT NULL,
        player_name nvarchar(150) NOT NULL,
        team_code nvarchar(10) NOT NULL,
        probability decimal(5,2) NULL,
        confidence_band nvarchar(50) NULL,
        opp_pitcher nvarchar(150) NULL,
        lineup_slot nvarchar(20) NULL,
        expected_pa decimal(4,1) NULL,
        season_avg nvarchar(20) NULL,
        last_5_avg nvarchar(40) NULL,
        avg_ev decimal(6,2) NULL,
        avg_launch_angle decimal(6,2) NULL,
        recent_avg_ev decimal(6,2) NULL,
        recent_launch_angle decimal(6,2) NULL,
        target_label nvarchar(80) NULL,
        contact_score smallint NULL,
        form_score smallint NULL,
        pitcher_score smallint NULL,
        rbi_score smallint NULL,
        runs_score smallint NULL,
        park_score smallint NULL,
        weather_score smallint NULL,
        source_file nvarchar(260) NOT NULL,
        imported_at_utc datetime2 NOT NULL CONSTRAINT DF_hrbi_model_predictions_imported_at DEFAULT SYSUTCDATETIME()
    );
END;
GO

IF COL_LENGTH('dbo.hrbi_model_predictions', 'weather_score') IS NULL
BEGIN
    ALTER TABLE dbo.hrbi_model_predictions ADD weather_score smallint NULL;
END;
GO

IF OBJECT_ID('dbo.hrbi_results', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.hrbi_results (
        hrbi_result_id bigint IDENTITY(1,1) NOT NULL PRIMARY KEY,
        result_date date NOT NULL,
        player_name nvarchar(150) NOT NULL,
        team_code nvarchar(10) NOT NULL,
        probability decimal(5,2) NULL,
        confidence_band nvarchar(50) NULL,
        lineup_slot nvarchar(20) NULL,
        expected_pa decimal(4,1) NULL,
        actual_hits int NULL,
        actual_runs int NULL,
        actual_rbi int NULL,
        actual_total int NULL,
        classification nvarchar(30) NULL,
        source_file nvarchar(260) NOT NULL,
        imported_at_utc datetime2 NOT NULL CONSTRAINT DF_hrbi_results_imported_at DEFAULT SYSUTCDATETIME()
    );
END;
GO

IF OBJECT_ID('dbo.hrbi_results_summary', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.hrbi_results_summary (
        result_date date NOT NULL PRIMARY KEY,
        wins int NULL,
        losses int NULL,
        outliers int NULL,
        precision decimal(8,4) NULL,
        recall decimal(8,4) NULL,
        f1_score decimal(8,4) NULL,
        source_file nvarchar(260) NOT NULL,
        imported_at_utc datetime2 NOT NULL CONSTRAINT DF_hrbi_results_summary_imported_at DEFAULT SYSUTCDATETIME()
    );
END;
GO

IF OBJECT_ID('dbo.live_home_runs', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.live_home_runs (
        live_home_run_id bigint IDENTITY(1,1) NOT NULL PRIMARY KEY,
        update_date date NOT NULL,
        player_name nvarchar(150) NOT NULL,
        team_name nvarchar(120) NULL,
        pitcher_name nvarchar(150) NULL,
        pitcher_team nvarchar(120) NULL,
        exit_velocity decimal(6,2) NULL,
        launch_angle decimal(6,2) NULL,
        distance_ft decimal(7,2) NULL,
        result_status nvarchar(80) NULL,
        source_file nvarchar(260) NOT NULL,
        imported_at_utc datetime2 NOT NULL CONSTRAINT DF_live_home_runs_imported_at DEFAULT SYSUTCDATETIME()
    );
END;
GO

IF OBJECT_ID('dbo.starting_lineup_players', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.starting_lineup_players (
        lineup_date date NOT NULL,
        matchup nvarchar(180) NOT NULL,
        team_side nvarchar(10) NOT NULL,
        team_name nvarchar(120) NULL,
        player_name nvarchar(150) NOT NULL,
        lineup_slot int NULL,
        position_code nvarchar(20) NULL,
        game_status nvarchar(80) NULL,
        game_time_et nvarchar(40) NULL,
        source_file nvarchar(260) NOT NULL,
        imported_at_utc datetime2 NOT NULL CONSTRAINT DF_starting_lineup_players_imported_at DEFAULT SYSUTCDATETIME(),
        CONSTRAINT PK_starting_lineup_players PRIMARY KEY (lineup_date, matchup, team_side, player_name)
    );
END;
GO

IF OBJECT_ID('dbo.game_weather', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.game_weather (
        weather_date date NOT NULL,
        game_time_et nvarchar(40) NOT NULL,
        away_abbr nvarchar(10) NOT NULL,
        home_abbr nvarchar(10) NOT NULL,
        away_team nvarchar(120) NULL,
        home_team nvarchar(120) NULL,
        venue nvarchar(160) NULL,
        wind_mph decimal(6,2) NULL,
        wind_direction nvarchar(20) NULL,
        temperature_f decimal(6,2) NULL,
        humidity_pct decimal(6,2) NULL,
        precip_pct decimal(6,2) NULL,
        weather_score smallint NULL,
        source_name nvarchar(40) NULL,
        source_url nvarchar(260) NULL,
        source_file nvarchar(260) NOT NULL,
        imported_at_utc datetime2 NOT NULL CONSTRAINT DF_game_weather_imported_at DEFAULT SYSUTCDATETIME(),
        CONSTRAINT PK_game_weather PRIMARY KEY (weather_date, away_abbr, home_abbr, game_time_et)
    );
END;
GO

IF OBJECT_ID('dbo.bvp_events', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.bvp_events (
        event_date date NULL,
        pitcher_name nvarchar(150) NOT NULL,
        batter_name nvarchar(150) NOT NULL,
        event_result nvarchar(120) NULL,
        launch_speed decimal(6,2) NULL,
        launch_angle decimal(6,2) NULL,
        distance_ft decimal(7,2) NULL,
        source_file nvarchar(260) NOT NULL,
        imported_at_utc datetime2 NOT NULL CONSTRAINT DF_bvp_events_imported_at DEFAULT SYSUTCDATETIME()
    );

    CREATE INDEX IX_bvp_events_pitcher_batter ON dbo.bvp_events (pitcher_name, batter_name);
END;
GO
