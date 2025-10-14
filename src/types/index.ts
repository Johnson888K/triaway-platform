// User Types
export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  bio?: string
  created_at: string
  updated_at: string
}

export interface UserProfile {
  id: string
  user_id: string
  past_narrative?: string
  present_focus?: string
  future_vision?: string
  skills: string[]
  interests: string[]
  values: string[]
  contribution_type: 'thinker' | 'builder' | 'steward'
  clarity_score?: number
  originality_score?: number
  ethics_score?: number
  usefulness_score?: number
  resonance_vector?: number[]
  created_at: string
  updated_at: string
}

// Matching Types
export interface Match {
  id: string
  user_id: string
  matched_user_id: string
  match_score: number
  compatibility_factors: {
    values_alignment: number
    skill_complementarity: number
    purpose_alignment: number
    communication_style: number
  }
  status: 'pending' | 'accepted' | 'declined' | 'expired'
  created_at: string
}

// Project Types
export interface Project {
  id: string
  name: string
  description: string
  purpose: string
  status: 'idea' | 'planning' | 'active' | 'completed' | 'archived'
  creator_id: string
  team_members: string[]
  skills_needed: string[]
  values_alignment: string[]
  created_at: string
  updated_at: string
}

export interface ProjectSpace {
  id: string
  project_id: string
  name: string
  description: string
  workspace_settings: Record<string, unknown>
  created_at: string
}

// Purpose Graph Types
export interface PurposeNode {
  id: string
  type: 'problem' | 'solution' | 'skill' | 'value' | 'project'
  title: string
  description: string
  connections: string[]
  weight: number
  created_at: string
}

export interface PurposeGraph {
  nodes: PurposeNode[]
  edges: Array<{
    from: string
    to: string
    weight: number
    type: string
  }>
}

// Contribution Types
export interface Contribution {
  id: string
  user_id: string
  title: string
  description: string
  type: 'idea' | 'artifact' | 'feedback' | 'collaboration'
  content_url?: string
  clarity_score?: number
  usefulness_score?: number
  community_rating?: number
  created_at: string
  updated_at: string
}
