export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      agents: {
        Row: {
          edited: string | null
          id: number
          name: string | null
          type: string | null
        }
        Insert: {
          edited?: string | null
          id?: number
          name?: string | null
          type?: string | null
        }
        Update: {
          edited?: string | null
          id?: number
          name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      auth: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
