export type ILaunchData = {
    flight_number: number
    mission_name: string
    mission_id: Array<string>
    launch_year: string
    launch_date_unix: number
    launch_date_utc: string
    launch_date_local: string
    is_tentative: boolean
    tentative_max_precision: string
    tbd: boolean
    launch_window: null | number
    rocket: {
      rocket_id: string
      rocket_name: string
      rocket_type: string
      first_stage: {
        cores: Array<{
          core_serial: string
          flight: number
          block: number
          gridfins: boolean
          legs: boolean
          reused: boolean
          land_success: any
          landing_intent: boolean
          landing_type: string
          landing_vehicle: any
        }>
      }
      second_stage: {
        block: number
        payloads: Array<{
          payload_id: string
          norad_id: Array<any>
          cap_serial: string
          reused: boolean
          customers: Array<string>
          nationality: string
          manufacturer: string
          payload_type: string
          payload_mass_kg: any
          payload_mass_lbs: any
          orbit: string
          orbit_params: {
            reference_system: string
            regime: string
            longitude: any
            semi_major_axis_km: any
            eccentricity: any
            periapsis_km: any
            apoapsis_km: any
            inclination_deg: any
            period_min: any
            lifespan_years: any
            epoch: any
            mean_motion: any
            raan: any
            arg_of_pericenter: any
            mean_anomaly: any
          }
          mass_returned_kg: any
          mass_returned_lbs: any
          flight_time_sec: any
          cargo_manifest: any
        }>
      }
      fairings: any
    }
    ships: Array<any>
    telemetry: {
      flight_club: any
    }
    launch_site: {
      site_id: string
      site_name: string
      site_name_long: string
    }
    launch_success: any
    links: {
      mission_patch: string
      mission_patch_small: string
      reddit_campaign: string
      reddit_launch: any
      reddit_recovery: any
      reddit_media: any
      presskit: any
      article_link: any
      wikipedia: any
      video_link: any
      youtube_id: any
      flickr_images: Array<any>
    }
    details: string
    upcoming: boolean
    static_fire_date_utc: any
    static_fire_date_unix: any
    timeline: any
    crew: any
    last_date_update: string
    last_ll_launch_date: any
    last_ll_update: any
    last_wiki_launch_date: string
    last_wiki_revision: string
    last_wiki_update: string
    launch_date_source: string
  }

  export interface ILaunchListState {
      completed: ILaunchData[] | null;
      upcomings: ILaunchData[] | null;
      filteredData: ILaunchData[] | null;
  }